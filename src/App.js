import { useState, useEffect } from "react";
import waldoBackground from "./waldo.jpg";
import waldo from "./waldo_portrait.jpeg";
import odlaw from "./odlaw_portrait.jpeg";
import Dropdown from "./Dropdown.js";
import Header from "./Header.js";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseApp = initializeApp({
	apiKey: "AIzaSyCV5wVcvqItNWQbX6e7F1sk7rdCZudiL60",

	authDomain: "waldo-db757.firebaseapp.com",

	projectId: "waldo-db757",

	storageBucket: "waldo-db757.appspot.com",

	messagingSenderId: "629608990686",

	appId: "1:629608990686:web:475f26182414e3f10c3f4f",

	measurementId: "G-P1YV4CLH28",
});

const db = getFirestore(firebaseApp);

function App(props) {
	async function getLocation() {
		const locations = collection(db, "characters");
		const snapshot = await getDocs(locations);
		const locationList = snapshot.docs.map((doc) => doc.data());
		setLocations(locationList);
	}

	async function getLeaderboard() {
		const leaderboard = collection(db, "leaderboard");
		const snapshot = await getDocs(leaderboard);
		const leaderboardList = snapshot.docs.map((doc) => doc.data());
		setOldLeaderboard(leaderboardList);
	}

	async function addLeaderboard(event) {
		event.preventDefault();
		console.log(event.target);
		try {
			const docRef = await addDoc(collection(db, "leaderboard"), {
				player: playerName,
				score: time,
			});

			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
		setAddPlayer(false);
	}

	const [mousePosition, setMousePosition] = useState([0, 0]);
	const [isVisible, setIsVisible] = useState(false);
	const [locations, setLocations] = useState([]);
	const [leaderboard, setLeaderboard] = useState([]);
	const [oldLeaderboard, setOldLeaderboard] = useState([]);
	const [characters, setCharacters] = useState([
		{ name: "waldo", isFound: false, img: waldo },
		{ name: "odlaw", isFound: false, img: odlaw },
	]);
	const [time, setTime] = useState(0);
	const [gameWon, setGameWon] = useState(false);
	const [addPlayer, setAddPlayer] = useState(false);
	const [playerName, setPlayerName] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (gameWon !== true) {
			const id = setInterval(() => {
				setTime((time) => time + 1);
			}, 1000);
			return () => clearInterval(id);
		}
	}, [gameWon]);

	const handleClick = (e) => {
		setMousePosition([e.pageX, e.pageY]);
		isVisible ? setIsVisible(false) : setIsVisible(true);
	};

	useEffect(() => {
		console.log(leaderboard);
	}, [leaderboard]);

	useEffect(() => {
		console.log(mousePosition);
	}, [mousePosition]);

	useEffect(() => {
		getLocation();
	}, []);

	useEffect(() => {
		getLeaderboard();
	}, []);

	useEffect(() => {
		let sortedLeaderboard = oldLeaderboard.sort((a, b) => a.score - b.score);
		console.log(leaderboard);
		let topTen = sortedLeaderboard.splice(0, 10);
		// console.log(topTen);
		setLeaderboard(topTen);
	}, [oldLeaderboard]);

	// useEffect(() => {
	// 	console.log(locations);
	// }, [locations]);

	const handlePortraitClick = (childData) => {
		const index = locations.findIndex((obj) => obj.name === childData);
		if (
			mousePosition[0] >= locations[index].location[0] - 20 &&
			mousePosition[0] <= locations[index].location[0] + 20 &&
			mousePosition[1] >= locations[index].location[1] - 20 &&
			mousePosition[1] <= locations[index].location[1] + 20
		) {
			const characterIndex = characters.findIndex(
				(obj) => obj.name === childData
			);
			const arrayCopy = [...characters];
			const objCopy = { ...arrayCopy[characterIndex], ...arrayCopy };
			objCopy.isFound = true;
			arrayCopy[characterIndex] = objCopy;
			setCharacters(arrayCopy);
			setMessage("You found one!");
		} else {
			console.log("Try again!");
			setMessage("Try again!");
		}
		setIsVisible(false);
	};

	useEffect(() => {
		let winGame = characters.every((obj) => obj.isFound === true);
		if (winGame) {
			setGameWon(true);
			console.log("You win");
			setMessage("You win!");
			if (leaderboard.length <= 10) {
				setAddPlayer(true);
			}
		}
	}, [characters]);

	const handleNameChange = (event) => {
		setPlayerName(event.target.value);
	};

	useEffect(() => {
		console.log(playerName);
	}, [playerName]);

	return (
		<div>
			<Header />
			<h3 className="timer">{time}s</h3>
			<h3 className="message">{message}</h3>
			<img
				src={waldoBackground}
				alt={props.description}
				onClick={handleClick}
				style={{ cursor: "crosshair" }}
			/>
			{isVisible && (
				<Dropdown
					position={mousePosition}
					parentCallback={handlePortraitClick}
					show={characters}
				/>
			)}

			{addPlayer && (
				<form onSubmit={addLeaderboard}>
					<label htmlFor="name"> Name </label>
					<input
						type="text"
						id="name"
						value={playerName}
						onChange={handleNameChange}
					/>
					<input type="submit" />
				</form>
			)}
			<div>
				<h3>Leaderboard</h3>
				{leaderboard.map((data, index) => (
					<div key={data.player}>
						{index + 1}. {data.player}: {data.score}s
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
