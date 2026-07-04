import { NextResponse } from "next/server";

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

// In-memory storage (will persist during runtime)
let reviews: Review[] = [];

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
  
  if (admin === "true") {
    // Return all reviews including pending (for admin)
    return NextResponse.json(reviews);
  }
  
  // Return only approved reviews (for public)
  const approvedReviews = reviews.filter((r) => r.approved);
  return NextResponse.json(approvedReviews);
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, approved } = body;

    const review = reviews.find((r) => r.id === id);
    if (!review) {
      return NextResponse.json(
        { error: "Review not found" },
        { status: 404 }
      );
    }

    review.approved = approved;
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

    reviews = reviews.filter((r) => r.id !== id);
    return NextResponse.json({ message: "Review deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete review" },
      { status: 500 }
    );
  }
}
