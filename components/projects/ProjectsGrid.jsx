import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from "react-i18next";


function ProjectsGrid() {
	const { t } = useTranslation();


	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					{t("LB0006")}
				</p>
			</div>

			<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>			<div className="grid grid-row-3 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">


				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
						<Image
							src='/images/Gear.png'
							className="rounded-t-xl border-none"
							alt="Single Project"
							layout="responsive"
							width={100}
							height={8}
						/>
					<div className="text-center px-4 ">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light ">
							{t('LB0007')}
						</p>

					</div>
				</div>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<Image
							src='/images/d3.png'
							className="rounded-t-xl border-none"
							alt="Single Project"
							layout="responsive"
							width={100}
							height={90}
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
							{t('LB0008')}
						</p>

					</div>
				</div>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<Image
							src='/images/y4.png'
							className="rounded-t-xl border-none"
							alt="Single Project"
							layout="responsive"
							width={100}
							height={90}
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
							{t('LB0009')}
						</p>

					</div>
				</div>
							</div>

		</motion.div>
		</section>
	);
}

export default ProjectsGrid;
