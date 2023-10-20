import classes from "./cssFiles/MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Select a delightful meal from our extensive menu and savor a delicious
        lunch or dinner in the comfort of your home. Explore our diverse options
        and treat your taste buds to a culinary experience like no other!
      </p>
      <p>
        Indulge in our exquisite meals crafted with premium ingredients,
        prepared just-in-time by skilled chefs. Quality and freshness
        guaranteed, ensuring a gourmet experience every time!
      </p>
    </section>
  );
};

export default MealsSummary;
