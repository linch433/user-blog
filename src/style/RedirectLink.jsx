import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const RedirectLink = ({msg, linkToPath, linkTitle}) => {
  return (
    <div className="flex flex-row gap-2">
      <div>{msg}</div>
      <Link to={linkToPath} className="text-int-blue-link cursor-pointer">
        {linkTitle}
      </Link>
    </div>
  );
};

RedirectLink.propTypes = {
  msg: PropTypes.string,
  linkToPath: PropTypes.string,
  linkTitle: PropTypes.string
}

RedirectLink.defaultProp = {
  msg: '',
  linkToPath: '/',
  linkTitle: ''
}

export default RedirectLink;
