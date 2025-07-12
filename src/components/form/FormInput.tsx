import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder: string;
  required?: boolean;
  maxLength?: number;
  isTextarea?: boolean;
}

const FormInput = ({
  label,
  type,
  value,
  onChange,
  error,
  placeholder,
  required = false,
  maxLength,
  isTextarea = false,
}: FormInputProps) => {
  return (
    <div>
      <label className="block text-amber-600 font-semibold mb-2 text-sm sm:text-base">
        {label}
      </label>
      {isTextarea ? (
        <Textarea
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`text-right border-amber-200 focus:border-amber-500 min-h-[100px] ${
            error ? "border-red-500" : ""
          }`}
          placeholder={placeholder}
        />
      ) : (
        <Input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`text-right border-amber-200 focus:border-amber-500 ${
            error ? "border-red-500" : ""
          }`}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1 text-right">{error}</p>}
    </div>
  );
};

export default FormInput;
