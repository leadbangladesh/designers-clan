import {
	CompanyCollaboration,
	Hero,
	Passion,
	Promise,
	Services
} from "../components/section/home"

export default function Home() {
	return (
		<>
			<Hero />
			<CompanyCollaboration />
			<Passion />
			<Services />
			{/* <RecentWorks /> */}
			<Promise />
		</>
	)
}
