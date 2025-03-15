import { db } from '@/server/db';
import { addTodo } from '@/server/supabaseFunction';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const todos = await db.task.findMany();
    return NextResponse.json(todos);
  } catch (error) {
    console.error('Error occured', error);
  }
}
export async function POST(req: NextRequest) {
  const { newTodo } = await req.json();
  try {
    const NewTodo = await addTodo(newTodo);
    return NextResponse.json(NewTodo);
  } catch (error) {
    console.error('Failed to add todo', error);
  }
}
