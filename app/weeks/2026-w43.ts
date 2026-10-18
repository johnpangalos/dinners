import type { Week } from "~/lib/week";

export default {
  year: 2026,
  week: 43,
  dates: "Sunday 18 to Saturday 24 October",
  lede: "A plant-based mince week built on Anamma formbar vegofärs, used for every meal: a ragù, meatballs, burgers and taco filling. It shapes without egg or breadcrumbs, and it thaws a portion at a time. Every dinner has a vegan base for everyone, with add-ons for the family on the side. The coloured tags show where a Sunday base comes back later in the week.",
  reuseNote:
    "Five bases made on Sunday and four ingredients bought once each show up on several nights. Two 850 g packs of formbar vegofärs cover the ragù, Thursday's meatballs, Friday's burgers and Saturday's tacos. Tuesday is dinner at Mormor's.",

  prep: {
    kicker: "Sunday 18 Oct · about 1 hour",
    intro:
      "Everything here is vegan. Do it on Sunday before the dumplings. Nothing here is used on Sunday itself, so everything goes straight into the fridge.",
    steps: [
      "Take 450 g formbar färs out of the freezer and spread it on a plate to thaw, 30–60 min. Put the rest back.",
      "Chop all onions, carrots and garlic in one go (ragù and slaw).",
      "Start the ragù with the thawed färs.",
      "While it simmers, make the pressed cucumber and the pickled onion.",
      "Shred the cabbage and carrot for the slaw. Stir together the smoky mayo.",
      "Split the ragù into 2 containers.",
      "Cool everything quickly, then store as below. Then on to the dumplings.",
    ],
    storageNote:
      "Cooked food keeps 3–4 days in the fridge, so the ragù is eaten by Wednesday. Thawed färs shouldn't go back in the freezer, so each night's portion moves to the fridge the night before: 350 g on Wednesday night, 500 g on Thursday night and 400 g on Friday night.",
  },

  bases: [
    {
      id: "ragu",
      name: "Färs ragù",
      color: "red",
      used: "Used **Mon** and **Wed**",
      ingredients:
        "450 g Anamma formbar vegofärs, thawed · 2 yellow onions · 2 carrots · 3 garlic cloves · 2 tbsp olive oil · 2 tbsp tomato paste · 2 cans crushed tomatoes (400 g) · 1 vegetable stock cube · 1 dl water · 1 tsp dried oregano · 1 tbsp soy sauce · salt · pepper",
      method:
        "Soften the finely chopped onion, carrot and garlic in the oil, about 5 min. Add the färs and fry, breaking it into small crumbs with the spoon, until browned, 5–7 min. Fry in the paste for a minute, then add tomatoes, stock cube, water, oregano and soy. Simmer 25 min and season. Split into 2 containers, both for the fridge.",
      uses: { mon: "½", wed: "½" },
      store: "Fridge, 2 containers",
      moveToFridge: "–",
    },
    {
      id: "gurka",
      name: "Pressed cucumber (pressgurka)",
      color: "teal",
      used: "Used **Thu** and **Fri**",
      ingredients:
        "1 cucumber · ½ dl ättika (12%) · ¾ dl sugar · 1½ dl water · ½ tsp salt · a handful of chopped parsley",
      method:
        "Slice the cucumber very thinly. Stir the ättika, sugar, water and salt until the sugar dissolves, pour over and add the parsley. Ready in 30 min and keeps about a week in the fridge.",
      uses: { thu: true, fri: true },
      store: "Fridge",
      moveToFridge: "–",
    },
    {
      id: "slaw",
      name: "Red cabbage slaw",
      color: "green",
      used: "Used **Fri** and **Sat**",
      ingredients: "½ red cabbage (about 500 g) · 2 carrots · ½ tsp salt",
      method:
        "Shred the cabbage finely and grate the carrots. Toss with the salt and store undressed. Dress each night's half with lime juice and a little oil just before serving.",
      uses: { fri: "½", sat: "½" },
      store: "Fridge",
      moveToFridge: "–",
    },
    {
      id: "mayo",
      name: "Smoky mayo",
      color: "amber",
      used: "Used **Fri** and **Sat**",
      ingredients:
        "2 dl vegan mayo · 1 tsp smoked paprika · 1 small garlic clove, grated · 1 tbsp lime juice · 1 tsp sriracha",
      method: "Stir together and keep in a jar.",
      uses: { fri: true, sat: true },
      store: "Fridge",
      moveToFridge: "–",
    },
    {
      id: "onion",
      name: "Pickled red onion",
      color: "magenta",
      used: "Used **Mon**, **Wed**, **Fri** and **Sat**",
      ingredients:
        "1 red onion · 1 dl apple cider vinegar · 1 dl warm water · 1 tsp sugar · ½ tsp salt",
      method:
        "Slice thinly. Stir the vinegar, water, sugar and salt until dissolved, pour over and cover. Keeps about 2 weeks in the fridge.",
      uses: { mon: true, wed: true, fri: true, sat: true },
      store: "Fridge",
      moveToFridge: "–",
    },
  ],

  fresh: [
    { name: "Oat milk & oat cream", uses: { wed: true, thu: true } },
    { name: "Salad leaves & cherry tomatoes", uses: { mon: true, wed: true, fri: true } },
    { name: "Limes", uses: { fri: true, sat: true } },
    { name: "Family cheese", uses: { mon: true, wed: true, fri: true, sat: true } },
  ],

  days: [
    {
      key: "sun",
      kicker: "Sunday 18 Oct",
      title: "Dumplings with the leftovers",
      meta: ["Your own plan tonight"],
      note: "No recipe from this plan tonight. Do the prep first, then make the dumplings with what's left from last week.",
    },
    {
      key: "mon",
      kicker: "Monday 19 Oct",
      title: "Spaghetti bolognese with a side salad",
      meta: ["15 min", "Vegan for everyone except the cheese"],
      tags: [
        { base: "ragu", label: "Färs ragù · ½" },
        { base: "onion", label: "Pickled onion" },
        { label: "Salad & tomatoes" },
        { label: "Family cheese" },
      ],
      everyone: [
        "[[ragu|½ the färs ragù]]",
        "4 portions spaghetti",
        "Salad leaves, 150 g cherry tomatoes, olive oil, salt",
        "[[onion|Pickled onion]] on the salad",
      ],
      you: ["Nutritional yeast or vegan parmesan"],
      family: ["Grated parmesan (the shared cheese)"],
      steps: [
        "Cook the spaghetti. Save 1 dl of the pasta water.",
        "Warm the ragù with a splash of pasta water until glossy and hot.",
        "Toss the salad leaves and halved tomatoes with oil and salt and top with pickled onion.",
        "Toss the pasta through the ragù and top with cheese or nutritional yeast.",
      ],
    },
    {
      key: "tue",
      kicker: "Tuesday 20 Oct",
      title: "Dinner at Mormor's",
      out: "Everyone's at Mormor's",
      meta: ["No cooking tonight"],
    },
    {
      key: "wed",
      kicker: "Wednesday 21 Oct",
      title: "Lasagne",
      meta: ["50 min, 15 hands-on", "Vegan béchamel, cheese on the family's side"],
      tags: [
        { base: "ragu", label: "Färs ragù · ½" },
        { base: "onion", label: "Pickled onion" },
        { label: "Oat milk & cream" },
        { label: "Salad & tomatoes" },
        { label: "Family cheese" },
      ],
      everyone: [
        "[[ragu|The other ½ of the ragù]]",
        "12 no-boil lasagne sheets (check they're egg-free)",
        "Béchamel: 3 tbsp olive oil, 3 tbsp flour, 6 dl unsweetened oat milk, a pinch of nutmeg, salt",
        "Salad leaves and the rest of the cherry tomatoes, with [[onion|pickled onion]]",
      ],
      you: ["2 tbsp nutritional yeast and 2 tbsp breadcrumbs (or vegan grated cheese) on your corner"],
      family: ["1½ dl grated cheese (the shared cheese) on their side"],
      steps: [
        "Move 350 g formbar färs from the freezer to the fridge for Thursday.",
        "Oven to 200°C. Warm the oil, stir in the flour, then whisk in the oat milk a little at a time. Simmer 3–4 min until thick and season with nutmeg and salt.",
        "Layer ragù, sheets and béchamel three times in a dish, ending with béchamel.",
        "Scatter nutritional yeast and breadcrumbs over one corner for you and cheese over the rest.",
        "Bake 30–35 min until golden and the sheets are soft. Rest 5 min. Serve with the salad.",
      ],
    },
    {
      key: "thu",
      kicker: "Thursday 22 Oct",
      title: "Meatball stroganoff with rice",
      meta: ["30 min", "Anamma formbar vegofärs"],
      tags: [
        { base: "gurka", label: "Pressed cucumber" },
        { label: "Oat milk & cream" },
      ],
      everyone: [
        "350 g Anamma formbar vegofärs (to the fridge Wednesday night) · ½ tsp allspice · pepper",
        "1 yellow onion · 2 tbsp oil",
        "2 tbsp tomato paste · 2½ dl oat cooking cream · 1 dl water · 1 tbsp Dijon mustard · 1 tsp soy sauce",
        "4 portions rice",
        "[[gurka|Pressed cucumber]] on the side",
        "Parsley, salt, pepper",
      ],
      family: [
        { text: "Optional: 300 g beef meatballs, browned and simmered in a ladle of the sauce in their own pan", sub: true },
      ],
      steps: [
        "Move 500 g formbar färs from the freezer to the fridge for Friday's burgers.",
        "Cook the rice. Mix the färs with allspice and pepper and roll about 20 small meatballs with oiled hands.",
        "Fry the meatballs in 1 tbsp oil until browned all over, 5 min, and set aside. Fry the onion in the rest of the oil until soft.",
        "Stir in the tomato paste, then the cream, water, mustard and soy. Add the meatballs and simmer 10 min until hot through. Season.",
        "Serve with rice, parsley and pressed cucumber.",
      ],
    },
    {
      key: "fri",
      kicker: "Friday 23 Oct",
      title: "Burgers with oven fries",
      meta: ["35 min", "Anamma formbar vegofärs"],
      tags: [
        { base: "slaw", label: "Red cabbage slaw · ½" },
        { base: "mayo", label: "Smoky mayo" },
        { base: "onion", label: "Pickled onion" },
        { base: "gurka", label: "Pressed cucumber" },
        { label: "Salad & tomatoes" },
        { label: "Lime" },
        { label: "Family cheese" },
      ],
      everyone: [
        "500 g Anamma formbar vegofärs (to the fridge Thursday night)",
        "½ tsp smoked paprika, salt, pepper",
        "800 g potatoes, 2 tbsp oil",
        "4 burger buns (check they're vegan)",
        "[[slaw|½ the slaw]] with ½ lime and a splash of oil",
        "[[mayo|Smoky mayo]], [[onion|pickled onion]], [[gurka|pressed cucumber]]",
        "Salad leaves, 1 tomato",
      ],
      you: ["A slice of vegan cheese (optional)"],
      family: ["Cheddar slices (the shared cheese)"],
      steps: [
        "Oven to 225°C. Cut the potatoes into wedges, toss with oil and salt and roast 30 min.",
        "Season the färs with paprika, salt and pepper and shape 4 flat patties with oiled hands.",
        "Move the last 400 g of färs to the fridge for Saturday. Fry the patties 3–4 min on each side until browned and hot through, melting the cheese on top in the last minute.",
        "Dress the slaw. Toast the buns.",
        "Build: mayo, salad, patty, pickled onion and pressed cucumber, with slaw and fries on the side.",
      ],
    },
    {
      key: "sat",
      kicker: "Saturday 24 Oct",
      title: "Tacos",
      meta: ["20 min", "Build your own"],
      tags: [
        { base: "slaw", label: "Red cabbage slaw · ½" },
        { base: "mayo", label: "Smoky mayo" },
        { base: "onion", label: "Pickled onion" },
        { label: "Lime" },
        { label: "Family cheese" },
      ],
      everyone: [
        "400 g Anamma formbar vegofärs (to the fridge Friday night, the last of the packs)",
        "Taco spice: 1 tbsp oil, 2 tsp cumin, 2 tsp smoked paprika, 1 tsp oregano, ½ tsp chilli flakes, 2 tbsp tomato paste, 1 dl water",
        "8–12 soft tortillas",
        "[[slaw|The other ½ of the slaw]] with ½ lime and a splash of oil",
        "[[mayo|Smoky mayo]], [[onion|pickled onion]]",
        "2 avocados, ½ lime, salt",
        "1 can sweetcorn, 1 jar salsa, coriander",
      ],
      family: ["Grated cheese (the shared cheese)", "Sour cream or crème fraîche"],
      steps: [
        "Fry the färs in the oil over high heat, 5–7 min, breaking it into crumbs, until browned.",
        "Add the spices and tomato paste and fry a minute, then add the water and cook until sticky and coated.",
        "Mash the avocados with lime and salt. Dress the slaw. Warm the tortillas.",
        "Set everything out and let everyone build their own.",
      ],
    },
  ],

  source: {
    by: "Anamma's",
    title: "Formbar vegofärs",
    url: "https://www.anamma.eu/produkt/formbar-vegofars/",
    note: "with thawing and cooking tips from Anamma's own product guide, for one vegan and a non-vegan family.",
  },
  servings: "Quantities are for 4: 1 vegan and 3 family portions.",
} satisfies Week;
