import React from "react";

function Input({ label, type, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 p-2 rounded"
      />
    </div>
  );
}

export default Input;