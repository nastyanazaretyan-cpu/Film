import { Check } from "lucide-react";
import { GradientBackground } from "../components/GradientBackground";
import { useState } from "react";

function HomePage() {
    const [name, setName] = useState("");

    const handleSaveName = () => {
        localStorage.setItem("name", name);
    };

    return (
        <>
            <GradientBackground />
            <main className="main">
                <h1 className="main_tittle">Film Together</h1>
                <div className="main_name">
                    <input className="main_input" type="text" placeholder="Введите имя" value={name} onChange={(e) => setName(e.target.value)} />
                    <button className="main_button" onClick={handleSaveName}>
                        <Check />
                    </button>
                </div>
                <p className="main_description">Выбери фильм под свое настроение</p>
            </main>
        </>
    );
}

export { HomePage };