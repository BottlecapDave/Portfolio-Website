using System;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace Xna.Graphics
{
    /// <summary>
    /// Encapsulates some text to be drawn in a particular font that is persistent
    /// </summary>
    public class SpriteText
    {
        #region Private Variables

        /// <summary>
        /// The sprite batch to draw the text to
        /// </summary>
        protected SpriteBatch _spriteBatch;

        /// <summary>
        /// The text to display
        /// </summary>
        protected string _text = String.Empty;

        /// <summary>
        /// The scale of the text
        /// </summary>
        protected Vector2 _scale = Vector2.Zero;

        /// <summary>
        /// The size of the text
        /// </summary>
        protected Vector2 _size = Vector2.Zero;

        /// <summary>
        /// The rotation of the text
        /// </summary>
        protected float _rotation = 0.0f;

        #endregion

        #region Member Properties

        /// <summary>
        /// The font to draw the text in
        /// </summary>
        public SpriteFont Font { get; set; }

        /// <summary>
        /// The text to draw
        /// </summary>
        public string Text 
        {
            get
            {
                return _text;
            }
            set
            {
                _text = value;
                this.Size = new Vector2(Font.MeasureString(value).X * this.Scale.X,
                                        Font.MeasureString(value).Y * this.Scale.Y);
                this.SetOrigin(_currentOrigin);
            }
        }

        /// <summary>
        /// The position to draw the text at
        /// </summary>
        public Vector2 Position { get; set; }

        /// <summary>
        /// The size of the text
        /// </summary>
        public Vector2 Size
        {
            get 
            {
                return _size;
            }
            private set
            {
                _size = value;
                _size = Vector2.Transform(_size, Matrix.CreateRotationZ(_rotation));
            }
        }

        /// <summary>
        /// The colour to draw the text in
        /// </summary>
        /// <remarks>
        /// Default is white
        /// </remarks>
        public Color Colour { get; set; }

        /// <summary>
        /// The rotation to draw the text
        /// </summary>
        public float Rotation 
        {
            get
            {
                return _rotation;
            }
            set
            {
                _rotation = value;
                this.Size = new Vector2(Font.MeasureString(_text).X * _scale.X,
                                        Font.MeasureString(_text).Y * _scale.Y);
            }
        }

        /// <summary>
        /// The origin of the text
        /// </summary>
        /// <remarks>
        /// Default is the centre of the text
        /// </remarks>
        public Vector2 Origin { get; protected set; }

        /// <summary>
        /// The current alignment for the origin
        /// </summary>
        private Alignment _currentOrigin;

        /// <summary>
        /// The scale at which to draw the text in
        /// </summary>
        public Vector2 Scale
        {
            get
            {
                return _scale;
            }
            set
            {
                _scale = value;
                _size = new Vector2(Font.MeasureString(_text).X * _scale.X,
                                    Font.MeasureString(_text).Y * _scale.Y);
            }
        }

        /// <summary>
        /// The effect to apply to the text
        /// </summary>
        /// <remarks>
        /// Default is none
        /// </remarks>
        public SpriteEffects Effect { get; set; }

        /// <summary>
        /// The depth at which the text is drawn
        /// </summary>
        /// <remarks>By default this is 0</remarks>
        public float LayerDepth { get; set; }

        #endregion

        #region Constructor

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="spriteBatch">The sprite batch to draw the text to</param>
        /// <param name="font">The font to draw the text in</param>
        /// <param name="text">The text to draw</param>
        public SpriteText(SpriteBatch spriteBatch, SpriteFont font, string text)
        {
            this.Font = font;
            _currentOrigin = Alignment.Centre;
            this._spriteBatch = spriteBatch;
            this.Colour = Color.White;
            this.Scale = Vector2.One;
            this.Effect = SpriteEffects.None;
            this.Text = text;
            this.LayerDepth = 0;
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// Set the origin of text
        /// </summary>
        /// <param name="origin">The origin alignment</param>
        public void SetOrigin(Alignment origin)
        {
            _currentOrigin = origin;

            switch (origin)
            {
                case Alignment.Left:
                    this.Origin = new Vector2(0.0f,
                                              this.Font.MeasureString(this.Text).Y / 2);
                    break;
                case Alignment.TopLeft:
                    this.Origin = new Vector2(0.0f,
                                              0.0f);
                    break;
                case Alignment.Top:
                    this.Origin = new Vector2(this.Font.MeasureString(this.Text).X / 2,
                                              0.0f);
                    break;
                case Alignment.TopRight:
                    this.Origin = new Vector2(this.Font.MeasureString(this.Text).X,
                                              0.0f);
                    break;
                case Alignment.Right:
                    this.Origin = new Vector2(this.Font.MeasureString(this.Text).X,
                                              this.Font.MeasureString(this.Text).Y / 2);
                    break;
                case Alignment.BottomRight:
                    this.Origin = new Vector2(this.Font.MeasureString(this.Text).X,
                                              this.Font.MeasureString(this.Text).Y);
                    break;
                case Alignment.Bottom:
                    this.Origin = new Vector2(this.Font.MeasureString(this.Text).X / 2,
                                              this.Font.MeasureString(this.Text).Y);
                    break;
                case Alignment.BottomLeft:
                    this.Origin = new Vector2(0.0f,
                                              this.Font.MeasureString(this.Text).Y);
                    break;
                case Alignment.Centre:
                    this.Origin = new Vector2(this.Font.MeasureString(this.Text).X / 2,
                                              this.Font.MeasureString(this.Text).Y / 2);
                    break;
                default:
                    throw new ArgumentException("Alignment not supported");
            }
        }

        /// <summary>
        /// Draw the text
        /// </summary>
        /// <param name="spriteBatch">The spritebatch to draw to</param>
        public void Draw(SpriteBatch spriteBatch)
        {
            _spriteBatch.DrawString(this.Font,
                                    this.Text,
                                    this.Position,
                                    this.Colour,
                                    this.Rotation,
                                    this.Origin,
                                    this.Scale,
                                    this.Effect,
                                    this.LayerDepth);
        }

        #endregion
    }
}
