import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-card-light dark:bg-card-dark border-t border-gray-200 dark:border-gray-700 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">Scenry</span>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-sm">
                            The leading platform to discover and book the best experiences in your city. Live the moment.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4">Discover</h4>
                        <ul className="space-y-2">
                            <li><a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Concerts</a></li>
                            <li><a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Theatre</a></li>
                            <li><a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Sports</a></li>
                            <li><a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Festivals</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Help</a></li>
                            <li><a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Terms</a></li>
                            <li><a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Privacy</a></li>
                            <li><a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">© 2026 Scenry. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                            <span className="material-icons">facebook</span>
                        </a>
                        <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                            <span className="material-icons">camera_alt</span>
                        </a>
                        <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                            <span className="material-icons">alternate_email</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
