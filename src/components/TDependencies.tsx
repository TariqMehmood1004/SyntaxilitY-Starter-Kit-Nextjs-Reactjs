import packageJson from "../../package.json";

export default function TDependencies() {
    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};

    return (
        <>
            <div className="flex max-[767px]:flex-col justify-between gap-20">

                {/* Dependencies */}
                <div className="rounded-xl">
                    <h3 className="text-lg font-medium mb-2">Dependencies</h3>
                    <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                        {Object.entries(dependencies).map(([name, version]) => (
                            <li key={name} className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 py-1">
                                <span>{name}</span>
                                <span>{version}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Dev Dependencies */}
                <div className="rounded-xl">
                    <h3 className="text-lg font-medium mb-2">Dev Dependencies</h3>
                    <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                        {Object.entries(devDependencies).map(([name, version]) => (
                            <li key={name} className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 py-1">
                                <span>{name}</span>
                                <span>{version}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
