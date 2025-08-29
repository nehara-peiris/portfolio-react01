import Button from "../components/Button";

export default function NotFound() {
    return (
        <main className="min-h-[60dvh] grid place-items-center w-[min(1100px,92%)] mx-auto py-10">
            <div className="text-center space-y-3">
                <h1 className="text-4xl font-semibold">404</h1>
                <p className="text-muted">The page you’re looking for doesn’t exist.</p>
                <Button as="a" href="/">Go Home</Button>
            </div>
        </main>
    );
}
