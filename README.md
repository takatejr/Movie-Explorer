# Movie Explorer

  [Live Simple Movie Explorer](https://takatejr.github.io/Movie-Explorer "Check it")
# Case:

    - Search feature
    
# Additional tech used:

    - styled-components,
    - pagination, for "all titles matching user input".

# Why not state management:

    It's enough simple app, if this case would be a part of something larger,
    then may be used React-Query for caching, Context API or Redux.

# Addition:

    - styles in components for now, depends on style coding,
    could be modules or styles as props,
    - Without test yet,
    - Without info when data is loading (pagi),
    - Without page number and title in url(for caching purpose),
    - Hardcoded 100 pages of pagination, API without info about page counter.
    - API key should send VIA header, cookies, but as some token, which could
      be encoded on backend, then response.
