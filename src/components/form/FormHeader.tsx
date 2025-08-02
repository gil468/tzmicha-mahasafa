const mainTextColor = import.meta.env.VITE_MAIN_TEXT_COLOR;

const FormHeader = () => {
  return (
    <div className="text-center mb-4 sm:mb-6 animate-fade-in">
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold text-${mainTextColor} mb-3 sm:mb-4 px-4`}
      >
        ❗️ זכרו - גם אתם יכולים לצמוח כלכלית
      </h2>
      <p className="text-lg sm:text-xl text-orange-700 px-4">
        השאירו פרטים ונחזור אליכם בהקדם 👇🏻
      </p>
    </div>
  );
};

export default FormHeader;
