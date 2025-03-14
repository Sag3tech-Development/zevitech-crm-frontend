export const ApiRequest = async <T>({
  endpoint,
  method = "GET",
  body,
  onSuccess,
  onFailure,
}: {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, any>;
  onSuccess?: () => void;
  onFailure?: () => void;
}): Promise<T> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BACKEND_URL}${endpoint}`,
      {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    if (onSuccess) onSuccess();
    return data;
  } catch (error: any) {
    console.error("API Request Error:", error.message);

    if (
      error.message.includes("NetworkError") ||
      error.message.includes("Failed to fetch")
    ) {
      window.location.href = "/server-down";
    }

    if (onFailure) onFailure();

    throw error;
  }
};
