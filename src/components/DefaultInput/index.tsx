type DefaultInputProps = {
  id: string;
  labelText?: string;
  labelStyle?: object;
  PropLabel?: object;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  labelStyle,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {labelText && (
        <label className='PropLabelStyle' htmlFor='taskInput' {...labelStyle}>
          {labelText}
        </label>
      )}
      <input id={id} type={type} {...rest} />
    </>
  );
}
