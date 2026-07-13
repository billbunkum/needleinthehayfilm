function BioSocials {

console.log("under construction working.");

  const ig_url = '';
  const imdb_url = '';
  const other_url = '';


  bio_socials = {
    'ig': '',
    'imdb': '',
    'website': '',
    'other': '',
  };


  return (
    <>
      <div className="socials">
        <a href="https://instagram.com/{ig_url}">
          <img
            className="social_icon_ig social_icons"
            src="assets/images/socials/instagram.png"
            alt="IG"
          />
        </a>
        <a href="https://www.imdb.com/name/{imdb_url}">
          <img
            className="social_icon_imdb social_icons"
            src="assets/images/socials/imdb-logo.png"
            alt="IMDb"
          />
        </a>
        <a href="{other_url}">
          <img
            className="social_icon_comedy_mask social_icons"
            src="assets/images/icons/comedy-mask-icon.png"
            alt="Project"
          />
        </a>
      </div>

    </>
  )
}

export default BioSocials;
