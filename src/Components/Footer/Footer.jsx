import './footer.scss'
import {Search} from '@material-ui/icons';
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="questions">
          <h3>Questions? Contact us.</h3>
        </div>
        <div className="links">
          <div className="column1">
              <ul>
                <li>FAQ</li>
                <li>Investor Relations</li>
                <li>Privacy</li>
                <li>Speed Test</li>
              </ul>
          </div>
          <div className="column2">
          <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Legal Notices</li>
              </ul>
          </div>
          <div className="column3">
          <ul>
                <li>Account</li>
                <li>Ways to Watch</li>
                <li>Corporate Information</li>
                <li>Only on Netflix</li>
              </ul>
          </div>
          <div className="column4">
          <ul>
                <li>Media Center</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
              </ul>
          </div>
        </div>
        <div className="selector">
          <select>
            <option>English</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Footer