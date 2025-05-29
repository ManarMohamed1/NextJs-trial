export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>Meal Page</h1>
      <p>{params.slug}</p>
    </main>
  );
}
