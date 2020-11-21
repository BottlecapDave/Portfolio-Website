using System;
using Xna.Graphics;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace Xna.Tools
{
    /// <summary>
    /// Class that tracks framerate for a game
    /// </summary>
    public class FrameCounter
    {
        #region Private Variables

        /// <summary>
        /// The current frames during this second
        /// </summary>
        private int _currentFrameCount;

        /// <summary>
        /// The total time that has passed. This is used to determine 
        /// when a second has passed.
        /// </summary>
        private TimeSpan _timePassed;

        /// <summary>
        /// Text representation of the current frame rate
        /// </summary>
        private SpriteText _frameCountText;

        /// <summary>
        /// The spritebatch to draw the frame rate to
        /// </summary>
        private SpriteBatch _spriteBatch;

        #endregion

        #region Constructor

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="viewPort">The viewport that will determine the position of the frame counter</param>
        /// <param name="spriteBatch">The spritebatch the frame count will be drawn to</param>
        /// <param name="spriteFont">The font to draw the frame count in</param>
        /// <param name="alignment">The area of the screen the frame count should be fixed to</param>
        public FrameCounter(Viewport viewPort,
                            SpriteBatch spriteBatch,
                            SpriteFont spriteFont,
                            Alignment alignment)
        {
            if (alignment != Alignment.TopLeft &&
                alignment != Alignment.TopRight &&
                alignment != Alignment.BottomLeft &&
                alignment != Alignment.BottomRight)
            {
                throw new ArgumentException(String.Format("Alignment '{0}' is not supported",
                                                          alignment));
            }

            _spriteBatch = spriteBatch;

            _currentFrameCount = 0;
            _timePassed = new TimeSpan();
            _frameCountText = new SpriteText(spriteFont,
                                             String.Format("FPS: 0"));
            _frameCountText.SetOrigin(alignment);
            switch (alignment)
            {
                case Alignment.TopLeft:
                    _frameCountText.Position = new Vector2(viewPort.TitleSafeArea.Left,
                                                           viewPort.TitleSafeArea.Top);
                    break;
                case Alignment.TopRight:
                    _frameCountText.Position = new Vector2(viewPort.TitleSafeArea.Right,
                                                           viewPort.TitleSafeArea.Top);
                    break;
                case Alignment.BottomLeft:
                    _frameCountText.Position = new Vector2(viewPort.TitleSafeArea.Left,
                                                           viewPort.TitleSafeArea.Bottom);
                    break;
                case Alignment.BottomRight:
                    _frameCountText.Position = new Vector2(viewPort.TitleSafeArea.Right,
                                                           viewPort.TitleSafeArea.Bottom);
                    break;
            }
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// Draw the frame count
        /// </summary>
        /// <remarks>
        /// SpriteBatch.Begin must be called before this is
        /// </remarks>
        /// <param name="gameTime">A snapshot of time passed</param>
        public void Draw(GameTime gameTime)
        {
            _currentFrameCount++;

            _timePassed = _timePassed.Add(new TimeSpan(gameTime.ElapsedGameTime.Ticks));
            if (_timePassed.Seconds >= 1)
            {
                _timePassed = _timePassed.Subtract(new TimeSpan(0, 0, 1));
                _frameCountText.Text = String.Format("FPS: {0}",
                                                     _currentFrameCount);
                _currentFrameCount = 0;
            }

            _frameCountText.Draw(_spriteBatch);
        }

        #endregion
    }
}
