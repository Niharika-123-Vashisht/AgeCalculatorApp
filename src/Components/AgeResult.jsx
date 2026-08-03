function AgeResult({ years, months, days }) {
  return (
    <h2 className="text-center text-xl font-bold mt-5">
      {years} Years, {months} Months, {days} Days
    </h2>
  );
}

export default AgeResult;