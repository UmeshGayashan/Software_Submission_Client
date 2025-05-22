import Image from "next/image";
import CodeEditor from "./dashboardPages/problems/[problemId]/components/CodeEditor.client";

export default function Home() {
  return (
    <div>
      <CodeEditor/>
    </div>
  );
}
