/**
 * Displays an error message according to Yup schema.
 */

export const InputErrorMessage: React.FC<{ error: string }> = ({
  error = "Entrez une valeur correcte",
}) => {
  return (
    <p data-testid="inputErr" className="text-red-500">
      {error}
    </p>
  );
};
