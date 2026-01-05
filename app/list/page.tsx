"use client";

import { Button } from "@components/ui";
import { toast } from "sonner";

export default function ListPage() {
  return (
    <div className="flex flex-col gap-3 justify-center align-center">
      <p>list page test</p>
      <Button
        onClick={() =>
          toast.success("good!", {
            description: "nice",
          })
        }
      >
        버튼 컴포넌트
      </Button>
    </div>
  );
}
