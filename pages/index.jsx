import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import AppBanner from '../components/shared/AppBanner';
import { useTranslation } from 'react-i18next';


export default function Home() {
	const { t, i18n } = useTranslation();

	return (
		<div className="container mx-auto">
			<PagesMetaHead title='Home' />

			<AppBanner />

			<ProjectsGrid />

			
		</div>
	);
}
