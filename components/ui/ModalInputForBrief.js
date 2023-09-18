import { InputErrorMessage } from "./InputErrorMessage";

export default function ModalInputForBrief({
  type,
  id,
  placeholder,
  error,
  register,
  name,
  pattern,
  max = 50,
}) {
  return (
    <>
      <input
        className="py-3 px-5 w-full border border-link-water rounded-5xl
      lg:max-w-[422px] lg:py-3.8"
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(name, pattern)}
        min={type === "number" ? 0 : undefined}
        max={type === "number" ? max : undefined}
      />
      {error && <InputErrorMessage message={error} />}
    </>
  );
}
