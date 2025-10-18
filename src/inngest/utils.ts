import { Sandbox } from "@e2b/code-interpreter";
import { AgentResult, TextMessage } from "@inngest/agent-kit";

/**
 * Connects to and returns a Sandbox identified by the given sandboxId.
 *
 * @param sandboxId - Identifier of the sandbox to connect to
 * @returns The connected Sandbox instance
 */
export async function getSandbox(sandboxId: string) {
  const sandbox = await Sandbox.connect(sandboxId);
  return sandbox;
}

/**
 * Get the concatenated text content of the last assistant message in an AgentResult.
 *
 * @param result - The AgentResult whose output will be searched for the last message with role "assistant"
 * @returns The assistant message text as a single `string` if present, `undefined` otherwise
 */
export function lastAssistantTextMessageContent(result: AgentResult) {
  const lastAssistantTextMessageIndex = result.output.findLastIndex(
    (message) => message.role === "assistant"
  );

  const message = result.output[lastAssistantTextMessageIndex] as
    | TextMessage
    | undefined;
  return message?.content
    ? typeof message?.content === "string"
      ? message.content
      : message.content.map((c) => c.text).join("")
    : undefined;
}