interface Props {
  terms: string[];
}

export default function TermsSection({ terms }: Props) {
  return (
    <div className="max-w-screen mx-auto mt-16 mb-2">
      <h2 className="text-3xl font-bold mb-6 text-start">
        Terms & Conditions
      </h2>

      <ul className="space-y-3 list-disc pl-6 text-gray-700">
        {terms.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ul>
    </div>
  );
}
