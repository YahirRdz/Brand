const sr = ScrollReveal({
  origin: "left",
  distance: "50px",
  duration: 3000,
  reset: true,
});

sr.reveal(
  ".box__one,.box__two,.box__three,.rectangule,.circle,.img_product,.opinion__cards ",
  {
    interval: 200,
  }
);

const srD = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  reset: true,
});

srD.reveal(
  ".nav,.home__data,.product__info,.pricing,.pricing__card,.opinion__head,.contact__container,.footer__sec1,.footer__sec2,.footer__sec3,.footer__sec4",
  {
    interval: 200,
  }
);
