import gitIcon from '../img/icons/git-icon.png';
import twitchIcon from '../img/icons/twitch-icon.png';
import twitterIcon from '../img/icons/twitter-icon.png';
import youtubeIcon from '../img/icons/youtube-icon.ico';
import srcIcon from '../img/icons/src-icon.png'


const Footer = () => {
  return (
    <footer id="socials" className="bg-darker-tp text-center text-light mt-5">
      <div className="container p-4 pb-0">
      <section className="mb-2">
        <a href="https://github.com/ottobisno" className="soc-med-icon">
          <img src={gitIcon} alt="The GitHub logo" width="35" height="35" className="d-inline-block" />
        </a>
        <a href="https://www.twitch.tv/SilentWolf444" className="soc-med-icon">
          <img src={twitchIcon} alt="The Twitch logo" width="35" height="35" className="d-inline-block" />
        </a>
        <a href="https://twitter.com/SilentWolf444" className="soc-med-icon">
          <img src={twitterIcon} alt="The Twitter logo" width="35" height="35" className="d-inline-block" />
        </a>
        <a href="https://www.youtube.com/channel/UCKWPDZotW81ET0T4nKcNnRw" className="soc-med-icon">
          <img src={youtubeIcon} alt="The YouTube logo" width="35" height="35" className="d-inline-block" />
        </a>
        <a href="https://www.speedrun.com/user/SilentWolf" className="soc-med-icon">
          <img src={srcIcon} alt="The speedrun.com logo" width="35" height="35" className="d-inline-block" />
        </a>
      </section>
      </div>
      <div className="p-3">
        Contact:
        <span> </span>
        <a className="text-light" href="mailto:ottobisno444@gmail.com">ottobisno444@gmail.com</a>
      </div>
    </footer>
  )
};

export default Footer;