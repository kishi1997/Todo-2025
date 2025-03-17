import { formatDate } from '@/app/utils/utils';
import { db } from '@/server/db';
import { addTodo, deleteTodo, editTodo } from '@/server/supabaseFunction';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const todos = await db.task.findMany();
    if (todos.length === 0) {
      return NextResponse.json([]);
    } else {
      const formattedTodos = todos.map((todo) => {
        return {
          task: todo.task,
          id: todo.id,
          createdAt: formatDate(todo.createdAt),
          complete: todo.complete,
        };
      });
      return NextResponse.json(formattedTodos);
    }
  } catch (error) {
    console.error('Error occured', error);
  }
}
// タスク追加API
export async function POST(req: NextRequest) {
  const { newTodo } = await req.json();
  try {
    const NewTodo = await addTodo(newTodo);
    if (NewTodo == null) throw new Error('Failed to add todo');
    const formattedTodo = {
      task: NewTodo.task,
      id: NewTodo.id,
      createdAt: formatDate(NewTodo.createdAt),
      complete: NewTodo.complete,
    };
    return NextResponse.json(formattedTodo);
  } catch (error) {
    console.error('Failed to add todo', error);
  }
}
// タスク削除API
export async function DELETE(req: NextRequest) {
  const { deleteTodoId } = await req.json();
  try {
    const deletedTodo = await deleteTodo(deleteTodoId);
    if (deletedTodo == null) throw new Error('Failed to delete todo');
    return NextResponse.json(deletedTodo);
  } catch (error) {
    console.error('Failed to delete todo', error);
  }
}
// タス編集API
export async function PUT(req: NextRequest) {
  const { id, task, complete } = await req.json();
  try {
    const editedTodo = await editTodo(id, task, complete);
    if (editedTodo == null) throw new Error('Failed to delete todo');
    return NextResponse.json(editedTodo);
  } catch (error) {
    console.error('Failed to delete todo', error);
  }
}
