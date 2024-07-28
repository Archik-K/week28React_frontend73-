import React, { useState, useRef } from "react";

const TextFormatter = () => {
	// Хук для хранения форматированного текста
	const [formattedText, setFormattedText] = useState("");

	// Хук для ссылки на текстовое поле
	const inputRef = useRef(null);

	// Функция для обработки клика по кнопке
	const handleClick = () => {
		if (inputRef.current) {
			// Получаем текущее значение текстового поля
			const text = inputRef.current.value;
			// Форматируем текст (например, преобразуем в верхний регистр)
			const newText = text.toUpperCase();
			// Обновляем состояние
			setFormattedText(newText);
			// Очищаем текстовое поле после добавления текста
			inputRef.current.value = "";
		}
	};

	return (
		<div>
			<input type="text" ref={inputRef} placeholder="Введите текст" />
			<button onClick={handleClick}>Добавить</button>
			{/* Отображаем форматированный текст */}
			{formattedText && (
				<p style={{ color: "blue", fontWeight: "bold" }}>{formattedText}</p>
			)}
		</div>
	);
};

export default TextFormatter;
