
interface LegalProps {
  privacyPolicyDoc: string;
  termsOfServiceDoc: string;
}

export const Legal = ({ privacyPolicyDoc, termsOfServiceDoc }: LegalProps) => {
  return (
    <div>
      <h3 className="font-bold mb-4">Legal</h3>
      <ul className="space-y-2">
        <li>
          <a 
            href={`#${privacyPolicyDoc}`}
            className="text-mine-silver hover:text-white text-sm"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a 
            href={`#${termsOfServiceDoc}`}
            className="text-mine-silver hover:text-white text-sm"
          >
            Terms of Service
          </a>
        </li>
        <li>
          <a href="#" className="text-mine-silver hover:text-white text-sm">
            Cookie Policy
          </a>
        </li>
      </ul>
    </div>
  );
};
