import { dbConnect } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET() {
  const servicesCollection = await dbConnect('services');
  const services = await servicesCollection.find({}).toArray();

  return NextResponse.json(services);
}
