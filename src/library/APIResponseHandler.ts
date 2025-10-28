import { NextResponse } from "next/server";

class APIResponseHandler {

    static HTTP_200_OK(response: any, message: string, data: any) {
        return NextResponse.json({
            status: 200,
            status_code: "HTTP_200_OK",
            message: message,
            data: data
        });
    }

    static HTTP_201_CREATED(response: any, message: string, data: any) {
        return NextResponse.json({
            status: 201,
            status_code: "HTTP_201_CREATED",
            message: message,
            data: data
        });
    }

    static HTTP_400_BAD_REQUEST(response: any, message: string, data: any) {
        return NextResponse.json({
            status: 400,
            status_code: "HTTP_400_BAD_REQUEST",
            message: message,
            data: data
        });
    }

    static HTTP_401_UNAUTHORIZED(response: any, message: string, data: any) {
        return NextResponse.json({
            status: 401,
            status_code: "HTTP_401_UNAUTHORIZED",
            message: message,
            data: data
        });
    }

    static HTTP_403_FORBIDDEN(response: any, message: string, data: any) {
        return NextResponse.json({
            status: 403,
            status_code: "HTTP_403_FORBIDDEN",
            message: message,
            data: data
        });
    }

    static HTTP_404_NOT_FOUND(response: any, message: string, data: any) {
        return NextResponse.json({
            status: 404,
            status_code: "HTTP_404_NOT_FOUND",
            message: message,
            data: data
        });
    }

    static HTTP_500_INTERNAL_SERVER_ERROR(response: any, message: string, data: any) {
        return NextResponse.json({
            status: 500,
            status_code: "HTTP_500_INTERNAL_SERVER_ERROR",
            message: message,
            data: data
        });
    }
}

export default APIResponseHandler