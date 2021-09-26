import './library.css'
import arrow from '../../../images/lib.jpeg'


const Library = () =>{
    return(
        <div className="library">
            <p className="first1">The importance of school library can not be over emphasized. A library is an important source of knowledge to young minds in schools. It develops the important habit of reading among the students.
            </p>
            <p className="first2">
                The school library plays a great role in the life of students by serving as the store house of knowledge. The importance of a library in a school cannot be over emphasized.While the role of the school library remains constant, its design, digital platform, strategies and tools could change as technology changes.
            </p>
            <div className="helpofLibrary">
                <p className="helpTitle">Our School Library Help Our Students In The Following Ways</p>
                <ol>
                    <li>
                        Impact positively on the academic achievement of the students. Students can perform better during examination by reading various books.
                    </li>
                    <li>
                         Facilitate the work of the classroom teacher and ensures each student has equitable access to resources, irrespective of home opportunities or constraints.
                    </li>
                    <li>
                        Run independent learning programs, which integrate information resources and technologies
                    </li>
                    <li>
                        Equip students with the skills necessary to succeed in a constantly changing technological, social and economic environment.
                    </li>
                    <li>
                        Collaborate with classroom teachers to plan, implement and evaluate inquiry-based programs that will ensure students acquire skills to collect, critically analyse and organize information, problem-solve and communicate their findings.
                    </li>
                    <li>
                        Provide and promote quality fiction to develop and sustain in students the habit of reading for pleasure and to enrich students’ intellectual, aesthetic, cultural and emotional growth.
                    </li>
                    <li>
                        Cater for differences in learning and teaching styles through the provision of, and equality of access to, a wide range of curriculum resources – fiction and non-fiction, digital, print, audio and video.
                    </li>
                    <li>
                        Provide teachers with access to relevant curriculum information and professional development materials within and outside the school; and opportunities to cooperatively plan, implement and evaluate learning program
                    </li>
                </ol>
            </div>
            <div className="imgContent">
                <div className="imgArrow">
                    <p>Here's a Look of Our library</p>
                    <i className="fa fa-arrow-down arrowImg"></i>
                {/* <img src={arrow} alt="" className="arrowImg"  /> */}
                </div>
                <div className="libraryImgWrapper">
                    <div className="libraryImg">
                        <img src={arrow} alt="" />
                        <div className="libraryDec">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum qui est magni minus iusto vitae saepe eos dolores magnam mollitia voluptatem nobis laudantium non laborum, impedit explicabo, autem praesentium maiores.
                        </div>
                    </div>
                    <div className="libraryImg">
                        <img src={arrow} alt="" />
                        <div className="libraryDec">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum qui est magni minus iusto vitae saepe eos dolores magnam mollitia voluptatem nobis laudantium non laborum, impedit explicabo, autem praesentium maiores.
                        </div>
                    </div>
                    <div className="libraryImg">
                        <img src={arrow} alt="" />
                        <div className="libraryDec">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum qui est magni minus iusto vitae saepe eos dolores magnam mollitia voluptatem nobis laudantium non laborum, impedit explicabo, autem praesentium maiores.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Library