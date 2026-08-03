import React, {useState} from "react";
import Input from "../components/Input";
import AgeResult from "../components/AgeResult";
function AgeCalculator(){
  const [day,setDay] =useState("");
  const [month,setMonth] =useState("");
  const [year,setYear] =useState("");
 const [result,setResult] = useState(null);
  const [message, setMessage] = useState("");

  function calculateAge(){
    setMessage("");
    setResult(null);

if (day === "" || month === "" || year === "") {
      setMessage("Please fill all values");
      return;
}

const birthDate = new Date(year, month - 1, day);
const today = new Date();

//Check user enter real date or not.
if (
birthDate.getDate() != day ||
birthDate.getMonth() != month - 1 ||
birthDate.getFullYear() != year
 ) {
      setMessage("Please enter a valid date");
      return;
    }
if (birthDate > today) {
    setMessage("Not correct Date ..its can't be in the future ");
    return;
    }

let years = today.getFullYear()- birthDate.getFullYear();
let months = today.getMonth()- birthDate.getMonth();
let days = today.getDate()- birthDate.getDate();
  if (days< 0) {
    months = months - 1;
const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    );

days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }
setResult({
      years: years,
      months: months,
      days: days,
    });
  }

  return (
    <div className="p-6 bg-white shadow rounded">

      <h1 className="text-2xl font-bold text-center mb-6">
        Age Calculator
      </h1>
<Input
label="Day"
 type="number"
 value={day}
 onChange={(e) => setDay(e.target.value)}
placeholder="Enter Day"
      />

<Input
 label="Month"
 type="number"
value={month}
 onChange={(e) => setMonth(e.target.value)}
 placeholder="Enter Month"
/>

<Input
label="Year"
type="number"
 value={year}
 onChange={(e) => setYear(e.target.value)}
 placeholder="Enter Year"
/>

{message && (
  <p className="text-red-500 mb-4">
   {message}
  </p>
)}

      <button
        onClick={calculateAge}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Calculate Age
      </button>

      {result && (
        <AgeResult
          years={result.years}
          months={result.months}
          days={result.days}
        />
      )}

    </div>
  );
}

export default AgeCalculator;