import { NextResponse } from "next/server"
import middleware from "next-auth/middleware"

export default middleware;

export const config = {
    // *: zero or more 
    // +: one ore more
    // ?: zero or more
    matcher: ['/','/todo-list','/todo-board']
}