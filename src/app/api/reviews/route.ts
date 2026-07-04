import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

interface Review {
  id: string;
  name: string;
  email: string;
  rating: number;
  text: string;
  date: string;
  approved: boolean;
}

const DATA_FILE = path.join(process.cwd(), "data", "reviews.json");

// Ensure data directory exists
function ensureDataDir() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Load reviews from file
function loadReviews(): Review[] {
  try {
    ensureDataDir();
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error loading reviews:", error);
  }
  return [];
}

// Save reviews to file
function saveReviews(reviews: Review[]) {
  try {
    ensureDataDir();
    fs.writeFileSync(DATA_FILE, JSON.stringify(reviews, null, 2));
  } catch (error) {
    console.error("Error saving reviews:", error);
  }
}

// Initialize reviews from file
let reviews: Review[] = loadReviews();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, rating, text } = body;

    if (!name || !text || !rating) {
      return NextResponse.json(
        { error: "Name, text, and rating are required" },
        { status: 400 }
      );
    }

    const review: Review = {
      id: Date.now().toString(),
      name,
      email: email || "",
      rating: Number(rating),
      text,
      date: new Date().toISOString(),
      approved: false,
    };

    reviews.push(review);
    saveReviews(reviews);

    return NextResponse.json(
      { message: "Review submitted successfully", review },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit review" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const admin = searchParams.get("admin");
  
  // Reload from file to get latest data
  reviews = loadReviews();
  
  if (admin === "true") {
    return NextResponse.json(reviews);
  }
  
  const approvedReviews = reviews.filter((r) => r.approved);
  return NextResponse.json(approvedReviews);
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, approved } = body;

    // Reload from file
    reviews = loadReviews();
    
    const review = reviews.find((r) => r.id === id);
    if (!review) {
      return NextResponse.json(
        { error: "Review not found" },
        { status: 404 }
      );
    }

    review.approved = approved;
    saveReviews(reviews);
    
    return NextResponse.json({ message: "Review updated", review });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update review" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json(
        { error: "Review ID required" },
        { status: 400 }
      );
    }

    // Reload from file
    reviews = loadReviews();
    reviews = reviews.filter((r) => r.id !== id);
    saveReviews(reviews);
    
    return NextResponse.json({ message: "Review deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete review" },
      { status: 500 }
    );
  }
}