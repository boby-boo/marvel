import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";

import "./charInfo.scss";

const CharInfo = (props) => {
    const [char, setChar] = useState(null);

    const {getCharacter, clearError, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateChar()
    }, [props.charId])

    const updateChar = () => {
        const { charId } = props;
        if (!charId) {
            return;
        }

        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'))
    };

    const onCharLoaded = (char) => {
        setChar(char)
    };

    return (
        <div className="char__row">
            <div className="char__info">
                {setContent(process, View, char)}
            </div>
        </div>
    )
}

const View = ({ data }) => {
    const {name, description, thumbnail, homepage, wiki, comics} = data;

    let objectFit = {'objectFit' : 'cover'};
        if (thumbnail.includes('image_not_available')) {
            objectFit = {'objectFit': 'contain'}
        }

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={objectFit}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a 
                            target="blank"
                            href={homepage} 
                            className="button button__main"
                        >
                            <div className="inner">homepage</div>
                        </a>
                        <a 
                            target="blank"
                            href={wiki} 
                            className="button button__secondary"
                        >
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : <h2>There is not comics...</h2>}
                {
                    comics.map((item, i) => {
                        if (i > 9) return;
                        return (
                            <li key={i} className="char__comics-item">
                                <a href={item.resourceURI} target="blank">
                                    {item.name}
                                </a>
                            </li>
                        )
                    })
                }

            </ul>
        </>
    );
};

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;