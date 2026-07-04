import { NextResponse } from "next/server";

// In-memory storage (replace with database in production)
let reviews: Array<{
  id: string;
  name: string;
  email: string;
  rating: number;
  text: string;
  date: string;
  approved: boolean;
}> = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, rating, text } = body;

    // Validation
    if (!name || !text || !rating) {
      return NextResponse.json(
        { error: "Name, text, and rating are required" },
        { status: 400 }
      );
    }

    const review = {
      id: Date.now().toString(),
      name,
      email: email || "",
      rating: Number(rating),
      text,
      date: new Date().toISOString(),
      approved: false, // Requires admin approval
    };

    reviews.push(review);

    // TODO: Send email notification to admin
    // TODO: Store in database (MongoDB/PostgreSQL)

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

export async function GET() {
  // Return only approved reviews
  const approvedReviews = reviews.filter((r) => r.approved);
  return NextResponse.json(approvedReviews);
}
