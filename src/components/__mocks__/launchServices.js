export const mockLaunchesList = {
"data": {
    "launchesPast": [
    {
        "id": "108",
        "launch_date_utc": "2020-11-21T17:17:00.000Z",
        "launch_date_local": "2020-11-21T09:17:00-08:00",
        "launch_date_unix": 1605979020,
        "mission_name": "Sentinel-6 Michael Freilich",
        "details": "SpaceX will launch Sentinel-6 Michael Freilich into low Earth orbit for NASA, NOAA, ESA, and the European Organization for the Exploitation of Meteorological Satellites aboard a Falcon 9 from SLC-4E, Vandenberg Air Force Station. Sentinel-6(A) is an ocean observation satellite providing radar ocean surface altimetry data and also atmospheric temperature profiles as a secondary mission. The booster for this mission is will land at LZ-4."
    },
    {
        "id": "107",
        "launch_date_utc": "2020-11-16T00:27:00.000Z",
        "launch_date_local": "2020-11-15T19:27:00-05:00",
        "launch_date_unix": 1605486420,
        "mission_name": "Crew-1",
        "details": "SpaceX will launch the first operational mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying 3 NASA astronauts and 1 JAXA astronaut to the International Space Station. This mission will be the second crewed flight to launch from the United States since the end of the Space Shuttle program in 2011."
    },
    {
        "id": "106",
        "launch_date_utc": "2020-11-05T23:24:00.000Z",
        "launch_date_local": "2020-11-05T18:24:00-05:00",
        "launch_date_unix": 1604618640,
        "mission_name": "GPS III SV04 (Sacagawea)",
        "details": "SpaceX will launch GPS Block III Space Vehicle 04 from SLC-40, Cape Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by the US Air Force and produced by Lockheed Martin. This will be the fourth GPS III satellite launched and the third launched by SpaceX. The satellite will be delivered into a MEO transfer orbit. The booster for this mission will land on an ASDS."
    }
    ]
}};

export const mockLaunchDetails = {
    "data": {
        "launch": {
            "id": "108",
            "launch_date_utc": "2020-11-21T17:17:00.000Z",
            "launch_date_local": "2020-11-21T09:17:00-08:00",
            "launch_date_unix": 1605979020,
            "mission_name": "Sentinel-6 Michael Freilich",
            "details": "SpaceX will launch Sentinel-6 Michael Freilich into low Earth orbit for NASA, NOAA, ESA, and the European Organization for the Exploitation of Meteorological Satellites aboard a Falcon 9 from SLC-4E, Vandenberg Air Force Station. Sentinel-6(A) is an ocean observation satellite providing radar ocean surface altimetry data and also atmospheric temperature profiles as a secondary mission. The booster for this mission is will land at LZ-4.",
            "links" : {
                "article_link": "https://spaceflightnow.com/2020/11/21/international-satellite-launches-to-extend-measurements-of-sea-level-rise/",
                "video_link": "https://youtu.be/aVFPzTDCihQ"
            }
        }
    }};

export const mockGetLastLaunches = () => {
    return Promise.resolve({
        json: () => Promise.resolve(mockLaunchesList)
    });
};

export const mockGetLaunchById = (id) => {
    return Promise.resolve({
        json: () => Promise.resolve(mockLaunchDetails)
    });
};
