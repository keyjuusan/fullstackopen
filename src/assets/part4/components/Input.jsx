const Input = ({value,setValue,name,labelName}) => {
  return (
    <label>
      {labelName}
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        type="text"
        name={name}
      />
    </label>
  );
};
export default Input
