/**
 * Chatbot service — encapsulates bot response logic.
 * Currently uses a local rule-based approach.
 * Will be replaced with a FastAPI call in the integration step.
 */

const RESPONSES: Record<string, string> = {
  constitution:
    "The Constitution of India is the supreme law of India. It lays down the framework defining fundamental political principles, establishes the structure, procedures, powers and duties of government institutions, and sets out fundamental rights, directive principles, and the duties of citizens.",
  'fundamental rights':
    "The Constitution of India is the supreme law of India. It lays down the framework defining fundamental political principles, establishes the structure, procedures, powers and duties of government institutions, and sets out fundamental rights, directive principles, and the duties of citizens.",
  ipc:
    "The Indian Penal Code (IPC) is the official criminal code of India. It is a comprehensive code intended to cover all substantive aspects of criminal law. The code was drafted in 1860 on the recommendations of first law commission of India.",
  'indian penal code':
    "The Indian Penal Code (IPC) is the official criminal code of India. It is a comprehensive code intended to cover all substantive aspects of criminal law. The code was drafted in 1860 on the recommendations of first law commission of India.",
  rti:
    "The Right to Information Act, 2005 (RTI) is an Act of the Parliament of India which sets out the rules and procedures regarding citizens' right to information. Under the provisions of the Act, any citizen may request information from a 'public authority' which is required to reply expeditiously or within thirty days.",
  'right to information':
    "The Right to Information Act, 2005 (RTI) is an Act of the Parliament of India which sets out the rules and procedures regarding citizens' right to information. Under the provisions of the Act, any citizen may request information from a 'public authority' which is required to reply expeditiously or within thirty days.",
  'labour law':
    "Labour laws in India are laws that regulate the employment conditions, wages, and work environment of workers. India has a number of labour laws including the Factory Act, Minimum Wages Act, and recently introduced four Labour Codes.",
  'labor code':
    "Labour laws in India are laws that regulate the employment conditions, wages, and work environment of workers. India has a number of labour laws including the Factory Act, Minimum Wages Act, and recently introduced four Labour Codes.",
  sindhi:
    "Sindhi and Konkani are officially recognized languages under the 8th Schedule of the Constitution of India. Legal resources in these languages are available through the Department of Justice's multilingual initiatives.",
  konkani:
    "Sindhi and Konkani are officially recognized languages under the 8th Schedule of the Constitution of India. Legal resources in these languages are available through the Department of Justice's multilingual initiatives.",
};

const DEFAULT_RESPONSE =
  "I can provide information about the Indian Constitution, Indian Penal Code, Right to Information Act, or Labour Laws. Please let me know what specific legal information you're looking for.";

/**
 * Generate a bot response for a given user input.
 * Matches keywords in the input against known topics.
 */
export function generateBotResponse(userInput: string): string {
  const lowerInput = userInput.toLowerCase();

  for (const [keyword, response] of Object.entries(RESPONSES)) {
    if (lowerInput.includes(keyword)) {
      return response;
    }
  }

  return DEFAULT_RESPONSE;
}
