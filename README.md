# Alexa - "Münchner Nahverkehr"

This skill allows people to query departure information for S-Bahn and U-Bahn in Munich, Germany. It can be asked for
specific lines or generally for the next departures.

**Currently, the skill is only available in German.** The skill is available
[here on Amazon](https://www.amazon.de/Michael-Rose-Münchner-Nahverkehr/dp/B0743N2R9B). See the examples on the skill page for "usage".


## Structure

* `src/`
    * `index.js`: main entry point for the skill
    * `lang.js`: messages and utility functions for i18n
    * `masterdata/`: contains the known lines, transports, and locations.
    * `mvg/`: contains the adapter to get departure information
    * `test/`: contains some scripts to test functionality (no unit tests)
    * `util/`: contains helpers used throughout the skill


To build a deployment you can run `npm run build` which will produce a `deployment.zip` in the root directory. This file can then be uploaded
to AWS Lambda.
    

## Sources of Information

The departure information is gathered from the official [MVG Live website](http://www.mvg-live.de/MvgLive/MvgLive.jsp) and inspiration for constructing
requests was taken from [rmoritz/mvg-live](https://github.com/rmoriz/mvg-live).


## License

MIT - see [LICENSE](./LICENSE).


## Disclaimer

This project is not official or supported/backed by the MVG/MVV/SWM.
