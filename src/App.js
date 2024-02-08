import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LayOut } from './components/layout/layout';
import { HomePage } from './pages/homePage';
import { ContactsPage } from './pages/contactsPage';
import { AboutUsPage } from './pages/aboutPage';
import { NotFoundPage } from './pages/notFoundPage';

function App() {
	return (
		<BrowserRouter basename='reacttemp'>
			<Routes>
				<Route path="/" element={<LayOut />}>
					<Route index element={<HomePage />} />
					<Route path='/contacts' element={<ContactsPage />} />
					<Route path='/about' element={<AboutUsPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
