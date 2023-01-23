import { CSSProperties } from "react";

type ClassProp = "tw" | "className"

const withClassProp = (classProp: ClassProp, str: string) => {
  return { [classProp]: str }
}

interface CommentProps {
  isLiked: boolean;
  classProp: ClassProp;
}

const DislikeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    style={{
      width: '20px',
      height: '20px',
      position: 'relative',
      top: '2px',
      marginLeft: '8px'
    }}
  >
    <g>
      <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"/>
    </g>
  </svg>
)

const LikeIcon = ({ isLiked, classProp }: CommentProps) => {
  const style: CSSProperties = {
    width: '20px',
    height: '20px',
    position: 'relative',
    top: '-3px',
  };

  const classString = `${isLiked ? 'fill-blue-500' : ''}`
  return isLiked
    ? (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        style={style}
        {...withClassProp(classProp, classString)}
      >
        <g><path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z" /></g>
      </svg>
    ) : (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        {...withClassProp(classProp, classString)}
        style={style}
      >
        <g>
          <path
            d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
          />
        </g>
      </svg>
    )
}

const LikeCount = ({ classProp, isLiked, count }: CommentProps & { count: number }) => {
  return (
    <>
      <LikeIcon classProp={classProp} isLiked={isLiked} />
      <span
        {...withClassProp(classProp, "ml-1 text-xs")}
      >
        {count}
      </span>
    </>
  )
}

export const Comment = ({ classProp, scale }: { classProp: ClassProp, scale: boolean }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      ...scale ? {
        height: '100vh',
        width: '100vw',
        transform: 'scale(2)',
      } : {
        height: '100%',
        width: '100%',
      }
    }}
  >
  <div
    {...withClassProp(classProp, "text-gray-900 mx-auto sm:px-4 py-4 flex flex-col")}
  >
    <div
      {...withClassProp(classProp, "max-w-2xl	pr-4 pl-4 pr-4 pl-4 m-auto flex flex-col")}
    >
      <div
        {...withClassProp(classProp, "bg-white rounded-3 p-6 flex flex-col")}
      >
        <div
          {...withClassProp(classProp, "flex flex-col")}
        >
          <div
            {...withClassProp(classProp, "py-3 flex flex-col")}
          >
            <div
              {...withClassProp(classProp, "flex ml-0 sm:-ml-16")}
            >
              <img
                {...withClassProp(classProp, "rounded-full w-12 h-12")}
                style={{ position: 'relative', top: '-12px' }}
                src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S"
              />
              <div
                {...withClassProp(classProp, "flex-grow-1 ml-4 flex flex-col")}
              >
                <div
                  {...withClassProp(classProp, "mb-1 flex")}
                >
                  <a
                    href="#"
                    {...withClassProp(classProp, "font-bold")}
                  >
                    Studio KonKon
                  </a>&nbsp;
                  <span
                    {...withClassProp(classProp, "text-gray-700 ml-1")}
                  >
                    2 days ago
                  </span>
                </div>
                <div
                  {...withClassProp(classProp, "mb-2 flex")}
                >
                  Lorem ipsum dolor sit amet, ut qui commodo sensibus, id utinam inermis
                  constituto vim. In nam dolorum interesset, per fierent ponderum ea. Eos aperiri
                  feugiat democritum ne feugiat democritum ne.
                </div>
                <div {...withClassProp(classProp, "items-center mb-2 flex")}>
                  <LikeCount
                    isLiked
                    count={55}
                    classProp={classProp}
                  />
                  <DislikeIcon />
                  <a
                    href="#"
                    {...withClassProp(classProp, "text-gray-600 text-xs ml-3")}
                  >
                    VIEW ON YT
                  </a>
                  <a
                    href="#"
                    {...withClassProp(classProp, "text-red-600 text-xs ml-3")}
                  >
                    REPORT
                  </a>
                </div>

                  {/* THREAD */}


                  <div {...withClassProp(classProp, "mt-3 rounded flex flex-col")}>
                    <div {...withClassProp(classProp, "flex py-2")}>
                      <img
                        {...withClassProp(classProp, "rounded-full w-8 h-8")}
                        style={{ position: 'relative', top: '-2px' }}
                        src="https://yt3.ggpht.com/IXu3p0caOU4IQufqXIdnSoN4g_zV_DKCGq63x1ZLLG5mYbbkchshLBbuZYtAu4tzMCMFCIgx=s88-c-k-c0x00ffffff-no-rj"
                      />
                      <div {...withClassProp(classProp, "flex-grow-1 ml-2 flex flex-col")}>
                        <div {...withClassProp(classProp, "mb-1 flex")}>
                          <a
                            href="#"
                            {...withClassProp(classProp, "font-bold flex")}
                          >
                            Shinobu KonKon
                          </a>
                            <span
                              {...withClassProp(classProp, "text-gray-700 whitespace-no-wrap ml-1")}
                            >
                              1 day ago
                            </span>
                        </div>
                        <div {...withClassProp(classProp, "mb-2")}>
                          Disputando voluptatibus ei sit. Et veri deserunt
                          theophrastus pri, at mutat choro eum.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)