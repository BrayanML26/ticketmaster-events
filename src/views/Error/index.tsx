import { useNavigate, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { AlertCircle, Home, RotateCcw } from 'lucide-react';
import { Button } from '../../components/Button';

const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    let errorMessage = "Ocurrió un error inesperado.";

    if (isRouteErrorResponse(error)) {
        errorMessage = error.statusText || (error.data as any)?.message || errorMessage;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full" />
                <AlertCircle className="w-24 h-24 text-red-500 relative z-10" />
            </div>

            <div className="space-y-4 max-w-md">
                <h1 className="text-4xl font-black tracking-tight md:text-5xl">Vaya, algo salió mal</h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    {errorMessage}
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => window.location.reload()} variant="outline" className="flex gap-2">
                    <RotateCcw className="w-4 h-4" /> Reintentar
                </Button>
                <Button onClick={() => navigate('/')} className="flex gap-2">
                    <Home className="w-4 h-4" /> Ir al Inicio
                </Button>
            </div>
        </div>
    );
};

export default Error;
