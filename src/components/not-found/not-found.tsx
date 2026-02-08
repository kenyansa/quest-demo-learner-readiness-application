import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/card';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6 space-y-4">
          <div className="space-y-1">
            <h1 className="text-xl font-semibold text-darkBlue">Page not found</h1>
            <p className="text-sm text-greyBlue">
              The page you’re looking for doesn’t exist, or it may have moved.
            </p>
          </div>

          <button
            className="w-full rounded-md bg-violet-700 px-4 py-2 text-white"
            onClick={() => navigate('/')}
          >
            Back to Dashboard
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
