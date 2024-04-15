import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { useTranslation } from "react-i18next";


const contacts = [

	{
		id: 2,
		name: 'info@raid-alanzi.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+971523315992',
		icon: <FiPhone />,
	},
];

function ContactDetails() {
	const { t } = useTranslation();

	return (
		<div className="w-full">
			<div className="text-start max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					
				</h2>
				<div className="flex ">
							<div className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
							<FiMapPin />
							
							</div>
							<div className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
							{t("LB0011")}
							</div>
						</div>
				<ul>
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>

			</div>
		</div>
	);
}

export default ContactDetails;
