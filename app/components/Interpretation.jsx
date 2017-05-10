import React from 'react';
import axios from 'axios';
import Reveal from 'react-reveal';


const Interpretation = () => {

    window.scrollTo(0, 0)

    return (
      <div>
        <hr></hr>
        <div className="container">
          <div className="row">
            <h1 className="interpretation">Emotional Tone</h1>
            <p>Emotional tone is inferred from different types of emotions and feelings that people express in their language. For each of these emotions, the <a href="https://www.ibm.com/watson/">service</a> outputs a score that lies between 0 to 100 that indicates the probability that the emotion came across in the text. In this table, the low value describes the lowest a score a sentence or document can receive and can still be considered to contain that emotion. The high value describes when the sentence or document has a high probability of belonging to that emotion.</p>
          </div>
          <table className="bordered">
            <thead>
              <tr>
                <th className="interpretation">Emotion</th>
                <th className="th-pad interpretation">Description</th>
                <th className="td-pad interpretation">Low Value</th>
                <th className="td-pad interpretation">High Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Joy</td>
                <td className="td-pad">Joy or happiness has shades of enjoyment, satisfaction and pleasure. There is a sense of well-being, inner peace, love, safety and contentment.</td>
                <td className="td-pad">Less than 50 - less likely to be perceived as joyful.</td>
                <td className="td-pad">More than 75 - Highly likely to be perceived as joyful.</td>
              </tr>
              <tr>
                <td>Fear</td>
                <td className="td-pad">A response to impending danger. It is a survival mechanism that is a reaction to some negative stimulus. It may be a mild caution or an extreme phobia.</td>
                <td className="td-pad">Less than 50 - less likely to be perceived as scared.</td>
                <td className="td-pad">More than 75 - Highly likely to be perceived as scared.</td>
              </tr>
              <tr>
                <td>Sadness</td>
                <td className="td-pad">Indicates a feeling of loss and disadvantage. When a person can be observed to be quiet, less energetic and withdrawn, it may be inferred that sadness exists.</td>
                <td className="td-pad">Less than 50 - less likely to be perceived as sad.</td>
                <td className="td-pad">More than 75 - Highly likely to be perceived as sad.</td>
              </tr>
              <tr>
                <td>Disgust</td>
                <td className="td-pad">An emotional response of revulsion to something considered offensive or unpleasant. It is a sensation that refers to something revolting.</td>
                <td className="td-pad">Less than 50 - less likely to be perceived as disgusted.</td>
                <td className="td-pad">More than 75 - Highly likely to be perceived as disgusted.</td>
              </tr>
              <tr>
                <td>Anger</td>
                <td className="td-pad">Evoked due to injustice, conflict, humiliation, negligence or betrayal. If anger is active, the individual attacks the target, verbally or physically. If anger is passive, the person silently sulks and feels tension and hostility.</td>
                <td className="td-pad">Less than 50 - less likely to be perceived as angry.</td>
                <td className="td-pad">More than 75 - Highly likely to be perceived as angry.</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <br></br>
          <Reveal effect="animated fadeIn">
            <div className="row">
              <h1 className="interpretation">The Big Five</h1>
              <p>Social tone measures the social tendencies in people's writing. <a href="https://www.ibm.com/watson/">Tone Analyzer</a> responds with analysis on five different social tones: openness, conscientiousness, extraversion, agreeableness, and emotional range (or neuroticism). These five social tones are adopted fromÂ the Big-five personality model. For each of these categories, the <a href="https://www.ibm.com/watson/">service</a> outputs a score from 0 to 100 that indicates tendency toward the listed behaviors.</p>
            </div>
          </Reveal>
          <Reveal effect="animated fadeIn">
            <table className="bordered">
              <thead>
                <tr>
                  <th className="interpretation">Emotion</th>
                  <th className="td-pad interpretation">Description</th>
                  <th className="td-pad interpretation">Low Value</th>
                  <th className="td-pad interpretation">High Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Openness</td>
                  <td className="td-pad">The extent a person is open to experience a variety of activities.</td>
                  <td className="td-pad">Less than 50 - more likely to be perceived as no-nonsense, straightforward, blunt, or preferring tradition and the obvious over the complex, ambiguous, and subtle.</td>
                  <td className="td-pad">More than 75 - more likely to be perceived as intellectual, curious, emotionally-aware, imaginative, willing to try new things, appreciating beauty, or open to change.</td>
                </tr>
                <tr>
                  <td>Conscientiousness</td>
                  <td className="td-pad">The tendency to act in an organized or thoughtful way.</td>
                  <td className="td-pad">Less than 50 - more likely to be perceived as spontaneous, laid-back, reckless, unmethodical, remiss, or disorganized.</td>
                  <td className="td-pad">More than 75 - more likely to be perceived as disciplined, dutiful, achievement-striving, confident, driven, or organized.</td>
                </tr>
                <tr>
                  <td>Extraversion</td>
                  <td className="td-pad">The tendency to seek stimulation in the company of others.</td>
                  <td className="td-pad">Less than 50 - more likely to be perceived as independent, timid, introverted, restrained, boring, or dreary.</td>
                  <td className="td-pad">More than 75 - more likely to be perceived as engaging, seeking attention, needy, assertive, outgoing, sociable, cheerful, excitement-seeking, or busy.</td>
                </tr>
                <tr>
                  <td>Agreeableness</td>
                  <td className="td-pad">The tendency to be compassionate and cooperative towards others.</td>
                  <td className="td-pad">Less than 50 - more likely to be perceived as selfish, uncaring, uncooperative, self-interested, confrontational, skeptical, or arrogant.</td>
                  <td className="td-pad">More than 75 - more likely to be perceived as caring, sympathetic, cooperative, compromising, trustworthy, or humble.</td>
                </tr>
                <tr>
                  <td>Neuroticism</td>
                  <td className="td-pad">The extent a person's emotion is sensitive to the environment.</td>
                  <td className="td-pad">Less than 50 - more likely to be perceived as calm, bland, content, relaxed, unconcerned, or careful.</td>
                  <td className="td-pad">More than 75 - more likely to be perceived as concerned, frustrated, angry, passionate, upset, stressed, insecure, or impulsive.</td>
                </tr>
              </tbody>
            </table>
          </Reveal>
          <br></br>
          <div className="row center-align">
            <p><i>Special thanks to IBM for their awesome open sourced api</i></p>
          </div>
        </div>
      </div>
    );
}

module.exports = Interpretation;
